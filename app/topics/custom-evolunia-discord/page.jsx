import CustomEvoluniaDiscordKeywordPage, { generateMetadata } from './custom-evolunia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEvoluniaDiscordKeywordPage />;
}
