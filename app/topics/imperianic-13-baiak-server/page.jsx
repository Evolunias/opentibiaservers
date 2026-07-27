import Imperianic13BaiakServerKeywordPage, { generateMetadata } from './imperianic-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Imperianic13BaiakServerKeywordPage />;
}
