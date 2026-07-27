import Serenity15EvoServerKeywordPage, { generateMetadata } from './serenity-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity15EvoServerKeywordPage />;
}
