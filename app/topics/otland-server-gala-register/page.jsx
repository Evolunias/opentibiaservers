import OtlandServerGalaRegisterKeywordPage, { generateMetadata } from './otland-server-gala-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtlandServerGalaRegisterKeywordPage />;
}
