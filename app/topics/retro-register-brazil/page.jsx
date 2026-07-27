import RetroRegisterBrazilKeywordPage, { generateMetadata } from './retro-register-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroRegisterBrazilKeywordPage />;
}
