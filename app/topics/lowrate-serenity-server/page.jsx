import LowrateSerenityServerKeywordPage, { generateMetadata } from './lowrate-serenity-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateSerenityServerKeywordPage />;
}
