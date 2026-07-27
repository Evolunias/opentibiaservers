import HighExpSerenityServerKeywordPage, { generateMetadata } from './high-exp-serenity-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpSerenityServerKeywordPage />;
}
