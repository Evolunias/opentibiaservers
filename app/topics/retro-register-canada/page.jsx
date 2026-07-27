import RetroRegisterCanadaKeywordPage, { generateMetadata } from './retro-register-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroRegisterCanadaKeywordPage />;
}
