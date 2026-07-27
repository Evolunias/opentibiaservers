import RetroRegisterLatinAmericaKeywordPage, { generateMetadata } from './retro-register-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroRegisterLatinAmericaKeywordPage />;
}
