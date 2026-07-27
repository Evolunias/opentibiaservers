import NoResetServersFranceKeywordPage, { generateMetadata } from './no-reset-servers-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetServersFranceKeywordPage />;
}
