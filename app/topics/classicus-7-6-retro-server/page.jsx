import Classicus76RetroServerKeywordPage, { generateMetadata } from './classicus-7-6-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus76RetroServerKeywordPage />;
}
