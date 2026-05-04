import "./globals.css";
import Link from "next/link";
import ChunkLoadRecovery from "./components/ChunkLoadRecovery";
import Footer from "./components/Footer";
import CategoryDropdown from "./components/CategoryDropdown";
import ThemeToggle from "./components/ThemeToggle";
import LanguageSelector from "./components/LanguageSelector";
import CommandsBanner from "./components/CommandsBanner";
import HeaderNav from "./components/HeaderNav";
import DiscordWidget from "./components/DiscordWidget";
import MailingListForm from "./components/MailingListForm";
import { LanguageProvider } from "./context/LanguageContext";
import { getLogoUrl } from "@/app/lib/image-utils";
import { translate } from "@/app/lib/translations";

export const metadata = {
  metadataBase: new URL("https://evolisca.com"),
  title: {
    default: "Evolisca Wiki",
    template: "%s | Evolisca Wiki",
  },
  description:
    "Official-style Evolisca game wiki built for speed, clarity, and modern competitive web performance.",
  applicationName: "Evolisca Wiki",
  keywords: [
    "Evolisca",
    "Evolisca Wiki",
    "Tibia",
    "MMORPG",
    "game guide",
    "bosses",
    "talents",
    "wiki",
  ],
  icons: {
    icon: "/images/boss-raid-assets/evolisca-logo.webp",
  },
  openGraph: {
    title: "Evolisca Wiki",
    description:
      "A fast, modern knowledge hub for Evolisca systems, progression, bosses, and seasonal content.",
    siteName: "Evolisca Wiki",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evolisca Wiki",
    description:
      "A fast, modern knowledge hub for Evolisca systems, progression, bosses, and seasonal content.",
  },
};

export default function RootLayout({ children }) {
  const logoUrl = getLogoUrl();

  const categories = [
    { nameKey: 'nav.starter-guide', href: '/starter-guide' },
    { nameKey: 'nav.features', href: '/features' },
    { nameKey: 'nav.gallery', href: '/gallery' },
    { nameKey: 'nav.vocations', href: '/vocations' },
    { nameKey: 'nav.experience-stages', href: '/experience-stages' },
    { nameKey: 'nav.items', href: '/items' },
    { nameKey: 'nav.shop', href: '/shop' },
    { nameKey: 'nav.cosmetics', href: '/cosmetics' },
    { nameKey: 'nav.magic-stones', href: '/magic-stones' },
    { nameKey: 'nav.fishing', href: '/fishing' },
    { nameKey: 'nav.creatures', href: '/creatures' },
    { nameKey: 'nav.spells', href: '/spells' },
    { nameKey: 'nav.bosses', href: '/bosses' },
    { nameKey: 'nav.artifact-crystals', href: '/artifact-crystals' },
    { nameKey: 'nav.crafting', href: '/crafting' },
    { nameKey: 'nav.dungeons', href: '/dungeons' },
    { nameKey: 'nav.equipment-set-bonuses', href: '/equipment-set-bonuses' },
    { nameKey: 'nav.npcs', href: '/npcs' },
    { nameKey: 'nav.npc-quests', href: '/npc-quests' },
    { nameKey: 'nav.quests', href: '/quests' },
    { nameKey: 'nav.first-promotion-quest', href: '/quests/first-promotion-quest' },
    { nameKey: 'nav.second-promotion-quest', href: '/quests/second-promotion-quest' },
    { nameKey: 'nav.avatar-quest', href: '/quests/avatar-quest' },
    { nameKey: 'nav.blackbeard-the-ruthless', href: '/quests/blackbeard-the-ruthless' },
    { nameKey: 'nav.raids', href: '/raids' },
    { nameKey: 'nav.achievements', href: '/achievements' },
    { nameKey: 'nav.talents', href: '/talents' },
    { nameKey: 'nav.upgrade-system', href: '/upgrade-system' },
    { nameKey: 'nav.professional-tips', href: '/professional-tips' },
    { nameKey: 'nav.guilds', href: '/guilds' },
    { nameKey: 'nav.pvp', href: '/pvp' },
    { nameKey: 'nav.experience-sharing', href: '/experience-sharing' },
    { nameKey: 'nav.hidden-talent-points', href: '/hidden-talent-points' },
    { nameKey: 'nav.scripts', href: '/scripts' },
    { nameKey: 'nav.commands', href: '/commands' },
  ];

  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <ChunkLoadRecovery />

          <CommandsBanner />

          <header className="top-nav top-nav-home">
            <div className="top-nav-main">
              <Link href="/" className="brand-lockup">
                <img
                  src={logoUrl}
                  alt="Evolisca Logo"
                  width={56}
                  height={56}
                  style={{ borderRadius: '12px' }}
                />
                <span>
                <strong>Evolisca Wiki</strong>
                <small>Evolisca.com</small>
              </span>
              </Link>

              <div className="header-center">
                <ThemeToggle />
                <LanguageSelector />
              </div>

              <nav className="nav-links" aria-label="Primary">
                <Link href="/search">{translate('nav.search')}</Link>
                <a href="https://evolisca.com" target="_blank" rel="noreferrer">
                  {translate('nav.evolisca')}
                </a>
                <DiscordWidget variant="compact" />
              </nav>
            </div>

            <div className="mailing-list-row">
              <MailingListForm />
            </div>

            <HeaderNav />
          </header>

          <CategoryDropdown categories={categories} />

          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
