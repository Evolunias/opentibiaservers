import Serenity13LowExpServerKeywordPage, { generateMetadata } from './serenity-13-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity13LowExpServerKeywordPage />;
}
