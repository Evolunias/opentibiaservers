import RetroGuideSouthAmericaKeywordPage, { generateMetadata } from './retro-guide-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroGuideSouthAmericaKeywordPage />;
}
