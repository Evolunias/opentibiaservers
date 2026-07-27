import Serenity15BaiakServerKeywordPage, { generateMetadata } from './serenity-15-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity15BaiakServerKeywordPage />;
}
