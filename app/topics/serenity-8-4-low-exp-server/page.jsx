import Serenity84LowExpServerKeywordPage, { generateMetadata } from './serenity-8-4-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity84LowExpServerKeywordPage />;
}
