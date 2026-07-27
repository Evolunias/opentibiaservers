import RetroRegisterMexicoKeywordPage, { generateMetadata } from './retro-register-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroRegisterMexicoKeywordPage />;
}
