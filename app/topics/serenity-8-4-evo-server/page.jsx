import Serenity84EvoServerKeywordPage, { generateMetadata } from './serenity-8-4-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity84EvoServerKeywordPage />;
}
