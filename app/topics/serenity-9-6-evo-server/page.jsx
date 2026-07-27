import Serenity96EvoServerKeywordPage, { generateMetadata } from './serenity-9-6-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity96EvoServerKeywordPage />;
}
