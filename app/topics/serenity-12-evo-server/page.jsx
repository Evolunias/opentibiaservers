import Serenity12EvoServerKeywordPage, { generateMetadata } from './serenity-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity12EvoServerKeywordPage />;
}
