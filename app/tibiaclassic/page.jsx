import TibiaclassicPage, { generateMetadata } from './tibiaclassic';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaclassicPage />;
}
