import Serenity80LowExpServerKeywordPage, { generateMetadata } from './serenity-8-0-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity80LowExpServerKeywordPage />;
}
