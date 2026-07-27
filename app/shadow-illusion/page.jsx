import ShadowIllusionPage, { generateMetadata } from './shadow-illusion';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowIllusionPage />;
}
