import Serenity12LowExpServerKeywordPage, { generateMetadata } from './serenity-12-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity12LowExpServerKeywordPage />;
}
