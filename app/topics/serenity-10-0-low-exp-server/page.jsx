import Serenity100LowExpServerKeywordPage, { generateMetadata } from './serenity-10-0-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity100LowExpServerKeywordPage />;
}
