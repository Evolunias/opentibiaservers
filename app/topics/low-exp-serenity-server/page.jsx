import LowExpSerenityServerKeywordPage, { generateMetadata } from './low-exp-serenity-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpSerenityServerKeywordPage />;
}
