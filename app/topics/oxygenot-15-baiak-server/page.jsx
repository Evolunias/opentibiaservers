import Oxygenot15BaiakServerKeywordPage, { generateMetadata } from './oxygenot-15-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oxygenot15BaiakServerKeywordPage />;
}
