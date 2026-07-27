import Unline11CustomMapServerKeywordPage, { generateMetadata } from './unline-11-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline11CustomMapServerKeywordPage />;
}
