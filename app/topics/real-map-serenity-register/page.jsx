import RealMapSerenityRegisterKeywordPage, { generateMetadata } from './real-map-serenity-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSerenityRegisterKeywordPage />;
}
