import Serenity14LowExpServerKeywordPage, { generateMetadata } from './serenity-14-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity14LowExpServerKeywordPage />;
}
