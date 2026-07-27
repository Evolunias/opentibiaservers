import Serenity71LowExpServerKeywordPage, { generateMetadata } from './serenity-7-1-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity71LowExpServerKeywordPage />;
}
