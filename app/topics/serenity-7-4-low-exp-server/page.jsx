import Serenity74LowExpServerKeywordPage, { generateMetadata } from './serenity-7-4-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity74LowExpServerKeywordPage />;
}
