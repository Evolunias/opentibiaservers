import PvpeXanteriaServerKeywordPage, { generateMetadata } from './pvpe-xanteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeXanteriaServerKeywordPage />;
}
