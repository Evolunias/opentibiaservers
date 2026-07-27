import Serenity13BaiakServerKeywordPage, { generateMetadata } from './serenity-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity13BaiakServerKeywordPage />;
}
