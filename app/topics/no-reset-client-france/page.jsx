import NoResetClientFranceKeywordPage, { generateMetadata } from './no-reset-client-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetClientFranceKeywordPage />;
}
