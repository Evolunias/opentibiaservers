import ClassickDrakoriaGuildsKeywordPage, { generateMetadata } from './classick-drakoria-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoriaGuildsKeywordPage />;
}
