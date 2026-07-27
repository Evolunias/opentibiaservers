import OxygenotGermanyServerKeywordPage, { generateMetadata } from './oxygenot-germany-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotGermanyServerKeywordPage />;
}
