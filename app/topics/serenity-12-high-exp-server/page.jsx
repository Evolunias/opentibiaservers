import Serenity12HighExpServerKeywordPage, { generateMetadata } from './serenity-12-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity12HighExpServerKeywordPage />;
}
