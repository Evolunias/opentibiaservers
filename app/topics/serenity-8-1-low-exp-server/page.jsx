import Serenity81LowExpServerKeywordPage, { generateMetadata } from './serenity-8-1-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity81LowExpServerKeywordPage />;
}
