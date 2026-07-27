import RetroRegisterNorthAmericaKeywordPage, { generateMetadata } from './retro-register-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroRegisterNorthAmericaKeywordPage />;
}
