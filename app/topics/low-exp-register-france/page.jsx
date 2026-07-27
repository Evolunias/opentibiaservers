import LowExpRegisterFranceKeywordPage, { generateMetadata } from './low-exp-register-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpRegisterFranceKeywordPage />;
}
