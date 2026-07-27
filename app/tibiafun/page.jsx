import TibiafunPage, { generateMetadata } from './tibiafun';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiafunPage />;
}
