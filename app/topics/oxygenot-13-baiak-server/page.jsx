import Oxygenot13BaiakServerKeywordPage, { generateMetadata } from './oxygenot-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oxygenot13BaiakServerKeywordPage />;
}
