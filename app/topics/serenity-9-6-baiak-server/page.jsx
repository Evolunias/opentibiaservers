import Serenity96BaiakServerKeywordPage, { generateMetadata } from './serenity-9-6-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity96BaiakServerKeywordPage />;
}
