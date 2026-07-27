import RealMapXanteriaKeywordPage, { generateMetadata } from './real-map-xanteria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapXanteriaKeywordPage />;
}
