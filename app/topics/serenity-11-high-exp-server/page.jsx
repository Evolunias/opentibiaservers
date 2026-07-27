import Serenity11HighExpServerKeywordPage, { generateMetadata } from './serenity-11-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity11HighExpServerKeywordPage />;
}
