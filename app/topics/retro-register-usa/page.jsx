import RetroRegisterUsaKeywordPage, { generateMetadata } from './retro-register-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroRegisterUsaKeywordPage />;
}
