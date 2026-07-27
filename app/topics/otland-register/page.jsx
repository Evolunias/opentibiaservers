import OtlandRegisterKeywordPage, { generateMetadata } from './otland-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtlandRegisterKeywordPage />;
}
