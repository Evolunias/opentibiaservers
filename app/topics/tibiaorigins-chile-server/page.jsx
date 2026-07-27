import TibiaoriginsChileServerKeywordPage, { generateMetadata } from './tibiaorigins-chile-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaoriginsChileServerKeywordPage />;
}
