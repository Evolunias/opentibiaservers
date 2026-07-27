import RetroRegisterFranceKeywordPage, { generateMetadata } from './retro-register-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroRegisterFranceKeywordPage />;
}
