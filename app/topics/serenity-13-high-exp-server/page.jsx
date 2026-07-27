import Serenity13HighExpServerKeywordPage, { generateMetadata } from './serenity-13-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity13HighExpServerKeywordPage />;
}
