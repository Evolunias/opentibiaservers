import Serenity13EvoServerKeywordPage, { generateMetadata } from './serenity-13-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity13EvoServerKeywordPage />;
}
