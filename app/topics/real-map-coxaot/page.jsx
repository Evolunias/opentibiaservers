import RealMapCoxaotKeywordPage, { generateMetadata } from './real-map-coxaot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCoxaotKeywordPage />;
}
